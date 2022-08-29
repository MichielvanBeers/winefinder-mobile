import { Grape, Type, Tag, Food, Region, Allergen} from "../store/wines"

const concatWineAttributes = (...attributes: (Grape | Type | Tag | Food | Region | Allergen | string | undefined)[]) => {
    let wineAttributes: string[] = [] 

    for (const attribute of Object.values(attributes)) {

        if (Array.isArray(attribute)){
            const values = attribute.map(value => String(value.name))
            wineAttributes.push(...values)
        }

        else if (typeof(attribute) == 'string') {
            wineAttributes.push(attribute)
        }
        else if (typeof(attribute) == 'number'){
            wineAttributes.push(String(attribute))
        }
    } 

    return wineAttributes.join(', ')
}

export default concatWineAttributes