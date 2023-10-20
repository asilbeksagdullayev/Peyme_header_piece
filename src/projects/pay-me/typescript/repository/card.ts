import { Card } from '../entities';

export class CardRepository {
	private list: Card[] = [];
	private id = 1;

	create(card: Card) {
		if (this.isExist(card.number))
			throw new Error(`This card already exist cardNumber=${card.number}`);

		card.setId(this.id++);
		this.list.push(card);
	}

	delete(id: number) {
		const cardIdx = this.list.findIndex((c) => c.getId() === id);

		if (cardIdx === undefined) throw new Error(`Card not found with id=${id}`);

		return this.list.splice(cardIdx, 1)[0];
	}

	getCardsByOwnerId(userId: number) {
		const cards: Card[] = this.list.filter((c) => c.ownerId === userId);

		if (cards.length === 0) throw new Error(`Cards not found for this user with userId=${userId}`);

		return cards;
	}

	getList() {
		return this.list;
	}

	isExist(cardNumber: string): boolean {
		for (const card of this.list) if (card.number === cardNumber) return true;

		return false;
	}
}
