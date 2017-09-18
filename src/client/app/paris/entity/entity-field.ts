import {DataEntityType} from "./data-entity.base";

export interface Field{
	id?:string,
	name:string,
	data?:string,
	entity?:DataEntityType,
	type?:DataEntityType,
	defaultValue?:any,
	genericType?:DataEntityType,
	isArray?:boolean
}
