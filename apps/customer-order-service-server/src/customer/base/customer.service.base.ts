/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Customer as PrismaCustomer,
  Address as PrismaAddress,
  ContactPerson as PrismaContactPerson,
} from "@prisma/client";

export class CustomerServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.CustomerCountArgs, "select">): Promise<number> {
    return this.prisma.customer.count(args);
  }

  async customers(
    args: Prisma.CustomerFindManyArgs
  ): Promise<PrismaCustomer[]> {
    return this.prisma.customer.findMany(args);
  }
  async customer(
    args: Prisma.CustomerFindUniqueArgs
  ): Promise<PrismaCustomer | null> {
    return this.prisma.customer.findUnique(args);
  }
  async createCustomer(
    args: Prisma.CustomerCreateArgs
  ): Promise<PrismaCustomer> {
    return this.prisma.customer.create(args);
  }
  async updateCustomer(
    args: Prisma.CustomerUpdateArgs
  ): Promise<PrismaCustomer> {
    return this.prisma.customer.update(args);
  }
  async deleteCustomer(
    args: Prisma.CustomerDeleteArgs
  ): Promise<PrismaCustomer> {
    return this.prisma.customer.delete(args);
  }

  async findAddresses(
    parentId: string,
    args: Prisma.AddressFindManyArgs
  ): Promise<PrismaAddress[]> {
    return this.prisma.customer
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .addresses(args);
  }

  async findContactPeople(
    parentId: string,
    args: Prisma.ContactPersonFindManyArgs
  ): Promise<PrismaContactPerson[]> {
    return this.prisma.customer
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .contactPeople(args);
  }
}
