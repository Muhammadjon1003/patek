export type ProductType = {
    id?: number,
    title?: string,
    material_code?: string,
    product_banner?: string,
    product_description?: string,
    watch?: string,
    dial?: string,
    case?: string,
    strap?: string,
    images?: string[],
    collection_name?: string,
    img?: string,
    isLiked: boolean
}

export type CollectionType = {
    title: string,
    pathname: string,
    main_image: string,
    banner_image: string,
    model_code: string,
    motto: string,
    description: string,
    products: ProductType[]
}
export type Banner ={
    title?: string,
    banner_image?: string
}