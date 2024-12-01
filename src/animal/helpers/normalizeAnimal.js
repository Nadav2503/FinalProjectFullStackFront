const normalizeAnimal = (animal) => {

    return {
        name: animal.name,
        type: animal.type,
        gender: animal.gender,
        age: animal.age,
        description: animal.description,
        diet: animal.diet,
        isEndangered: animal.isEndangered,
        healthStatus: animal.healthStatus || "unknown",
        image: {
            url: animal.image?.url || "/images/placeholderAnimalPicture.webp",
            alt: animal.image?.alt || "default animal image",
        },
    };
};

export default normalizeAnimal;
