import { User } from '../entities';

export class UserRepository {
	private list: User[] = [];
	private id = 1;

	create(user: User) {
		if (this.isExist(user.phone)) throw new Error(`This User already exist phone=${user.phone}`);

		user.setId(this.id++);
		this.list.push(user);
	}

	getById(id: number) {
		const userIdx = this.list.findIndex((c) => c.getId() === id);

		if (userIdx === undefined) throw new Error(`User not found with id=${id}`);

		return this.list[userIdx];
	}

	delete(id: number) {
		const userIdx = this.list.findIndex((c) => c.getId() === id);

		if (userIdx === undefined) throw new Error(`User not found with id=${id}`);

		return this.list.splice(userIdx, 1)[0];
	}

	getUsersByPhoneNumber(phone: string) {
		const users: User[] = this.list.filter((user) => user.phone === phone);

		if (users.length === 0) throw new Error(`Users not found for this user phone=${phone}`);

		return users;
	}

	getList() {
		return this.list;
	}

	getByIndex(index: number) {
		return this.list[index];
	}

	isExist(phone: string): boolean {
		for (const user of this.list) if (user.phone === phone) return true;

		return false;
	}
}
