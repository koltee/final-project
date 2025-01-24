import prismaClient from "../../prisma";

interface CategoryRequest {
    name: string;
}

class CreateCategoryService {
    async execute({ name }: CategoryRequest) {
        if (name === "") {
            throw new Error("Category name cannot be empty");
        }

        const category = await prismaClient.category.create({
            data: {
                name,
            },
            select: {
                id: true,
                name: true,
            }
        })

        return category;
    }
}

export { CreateCategoryService };