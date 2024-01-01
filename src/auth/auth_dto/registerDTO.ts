import { IsDefined, IsEmail, MinLength, ValidationArguments, ValidationOptions, registerDecorator} from "class-validator";

export default class RegisterDTO {
  @IsEmail()
  @IsDefined()
  email:string

  @IsDefined()
  name: string;

  @IsDefined()
  @MinLength(8)
  password:string;

  @IsDefined()
  @MinLength(8)
  @IsEqualTo('password', {
    message: 'Password confirmation does not match with password',
  })
  confirmPassword:string;

}

export function IsEqualTo(
    property: string,
    validationOptions?: ValidationOptions,
) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      name: 'isEqualTo',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [property],
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          const relatedValue = (args.object as any)[args.constraints[0]];
          return value === relatedValue;
        },
      },
    });
  };
}
