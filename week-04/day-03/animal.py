class Animal(object):
    def __init__(self, hunger=50, thirst=50):
        self.hunger = hunger
        self.thirst = thirst


    def eat(self):
        self.hunger -= 1
        return self

    def drink(self):
        self.thirst -= 1
        return self

    def play(self):
        self.thirst += 1
        self.hunger += 1
        return self
    def printer(self):
        print(self.hunger, self.thirst)


        