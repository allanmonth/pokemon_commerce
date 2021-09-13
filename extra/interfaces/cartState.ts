export interface ItemsState {
    id: number,
    image: string,
    name: string,
    value: number,
    quantity: number
}

export interface CartState {
    items: Array<ItemsState>,
    total: number,
    parcel: number,
    quantity: number
}

export interface CartActionState {
    item: ItemsState
}