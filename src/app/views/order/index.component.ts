import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Animations
import { AutomaticAnimation } from '@animations';

// Services
import { LanguageService, LoadingService, SocketService } from '@services';
import { ApiResponseWrapper, EventOrder, OrderItem, Product } from 'karikarihelper';

@Component({
	selector: 'app-order-view',
	templateUrl: './index.component.html',
	animations: [AutomaticAnimation.pop],
})
export class OrderViewComponent implements OnInit {
	/**
	 * Language
	 */
	public selectedLanguage = LanguageService.DEFAULT_LANGUAGE;

	/**
	 * In House
	 */
	public orderData: EventOrder | null = null;
	public orderItems: OrderItem[] = [];

	constructor(
		private _activedRoute: ActivatedRoute,
		private _languageService: LanguageService,
		private _loadingService: LoadingService,
		private _socketService: SocketService,
	) {}

	ngOnInit(): void {
		this._loadingService.updateLoading(true);

		const orderId = this._activedRoute.snapshot.paramMap.get('id');

		if (!orderId) {
			return;
		}

		this._socketService.socket.emit('order:join', orderId);

		this._socketService.socket.on('order:refresh', (response) => {
			this.orderItems = [];

			this._loadingService.updateLoading(false);

			const serializedResponse = response as ApiResponseWrapper<EventOrder>;

			if (serializedResponse.wasSuccessful === false || !serializedResponse.result) {
				return;
			}

			this.orderData = serializedResponse.result;

			this.orderData.items.forEach((item) => {
				this.orderItems.push(item);
			});
		});

		this._languageService.language.subscribe({
			next: (nextLanguage) => {
				this.selectedLanguage = nextLanguage;
			},
		});
	}

	public getBasicDateString(date: Date): string {
		const newDate = new Date(date);

		return newDate.toLocaleDateString('pt-BR', {
			year: 'numeric',
			month: '2-digit',
			day: '2-digit',
		});
	}
}
