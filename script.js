//complete this code
class Animal {
	private species: string;
	constructor(species: string){
		this.species;
	}
	get species(): string{
		return this.species;
	}
	makeSound(): void{
		console.log(`The ${this.species} makes a sound`)
	}
}

class Dog extends Animal {
	purr(): void{
		console.log("purr");
	}
}

class Cat extends Animal {
	bark(): void{
		console.log("woof");
	}
}
const myCat = new Cat("Siamese");
myCat.makeSound();

myCat.purr();

const myDog = new Dog("Golden Retriever");
myDog.makeSound();

myDog.bark();

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
