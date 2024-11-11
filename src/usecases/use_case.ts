export  default interface Usecase<input,output>{
     execute(input:input):Promise<output>
}