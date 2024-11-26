"use server"

import { Prisma, PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

export async function createGuests(guestNames: Prisma.GuestCreateManyInput[]) {
    try {
        const newGuests = await prisma.guest.createMany({
            data: guestNames,
        });
        return newGuests;
    } catch (error) {
        throw error;
    }
}

export async function fetchGuests() {
    try {
        const guests = await prisma.guest.findMany();
        return guests;
    } catch (error) {
        throw error;
    }

}

export async function deleteGuest(id: string) {
    try {
        await prisma.guest.delete({ where: {
            id
        }});
        revalidatePath('/delete');
    } catch (error) {
        throw error;
    }

}