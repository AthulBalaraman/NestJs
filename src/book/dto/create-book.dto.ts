import { IsNotEmpty, IsString , IsNumber, IsEnum} from "class-validator"
import { Category } from "../schemas/book.schema"

// You have to apply validation to all these 
// To do that you have to use the class validator
export class CreateBookDto{

  @IsNotEmpty()
  @IsString()
  readonly title:string

  @IsNotEmpty()
  @IsString()
  readonly description:string

  @IsNotEmpty()
  @IsNumber()
  readonly price :number

  @IsNotEmpty()
  @IsString()
  readonly author : string

  @IsNotEmpty()
  @IsEnum(Category, {message:"Please enter correct category"})
  readonly category : Category
}