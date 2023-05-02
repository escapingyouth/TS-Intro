// Enums allow us to define a set of named constants. We can give these constants numeric or string values

enum OrderStatus {
	PENDING,
	SHIPPED,
	DELIVERED,
	RETURNED
}

const myStatus = OrderStatus.DELIVERED;

function isDelivered(status: OrderStatus): boolean {
	return status === OrderStatus.DELIVERED;
}

isDelivered(OrderStatus.RETURNED);

enum ArrowKeys {
	UP = 'up',
	DOWN = 'down',
	LEFT = 'left',
	RIGHT = 'right'
}
