/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { ContactPersonService } from "../contactPerson.service";
import { ContactPersonCreateInput } from "./ContactPersonCreateInput";
import { ContactPerson } from "./ContactPerson";
import { ContactPersonFindManyArgs } from "./ContactPersonFindManyArgs";
import { ContactPersonWhereUniqueInput } from "./ContactPersonWhereUniqueInput";
import { ContactPersonUpdateInput } from "./ContactPersonUpdateInput";
import { AddressFindManyArgs } from "../../address/base/AddressFindManyArgs";
import { Address } from "../../address/base/Address";
import { AddressWhereUniqueInput } from "../../address/base/AddressWhereUniqueInput";
import { OrderFindManyArgs } from "../../order/base/OrderFindManyArgs";
import { Order } from "../../order/base/Order";
import { OrderWhereUniqueInput } from "../../order/base/OrderWhereUniqueInput";

export class ContactPersonControllerBase {
  constructor(protected readonly service: ContactPersonService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ContactPerson })
  async createContactPerson(
    @common.Body() data: ContactPersonCreateInput
  ): Promise<ContactPerson> {
    return await this.service.createContactPerson({
      data: {
        ...data,

        customer: data.customer
          ? {
              connect: data.customer,
            }
          : undefined,
      },
      select: {
        createdAt: true,

        customer: {
          select: {
            id: true,
          },
        },

        department: true,
        email: true,
        firstName: true,
        id: true,
        lastName: true,
        phone: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [ContactPerson] })
  @ApiNestedQuery(ContactPersonFindManyArgs)
  async contactPeople(
    @common.Req() request: Request
  ): Promise<ContactPerson[]> {
    const args = plainToClass(ContactPersonFindManyArgs, request.query);
    return this.service.contactPeople({
      ...args,
      select: {
        createdAt: true,

        customer: {
          select: {
            id: true,
          },
        },

        department: true,
        email: true,
        firstName: true,
        id: true,
        lastName: true,
        phone: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ContactPerson })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async contactPerson(
    @common.Param() params: ContactPersonWhereUniqueInput
  ): Promise<ContactPerson | null> {
    const result = await this.service.contactPerson({
      where: params,
      select: {
        createdAt: true,

        customer: {
          select: {
            id: true,
          },
        },

        department: true,
        email: true,
        firstName: true,
        id: true,
        lastName: true,
        phone: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: ContactPerson })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateContactPerson(
    @common.Param() params: ContactPersonWhereUniqueInput,
    @common.Body() data: ContactPersonUpdateInput
  ): Promise<ContactPerson | null> {
    try {
      return await this.service.updateContactPerson({
        where: params,
        data: {
          ...data,

          customer: data.customer
            ? {
                connect: data.customer,
              }
            : undefined,
        },
        select: {
          createdAt: true,

          customer: {
            select: {
              id: true,
            },
          },

          department: true,
          email: true,
          firstName: true,
          id: true,
          lastName: true,
          phone: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: ContactPerson })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteContactPerson(
    @common.Param() params: ContactPersonWhereUniqueInput
  ): Promise<ContactPerson | null> {
    try {
      return await this.service.deleteContactPerson({
        where: params,
        select: {
          createdAt: true,

          customer: {
            select: {
              id: true,
            },
          },

          department: true,
          email: true,
          firstName: true,
          id: true,
          lastName: true,
          phone: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/addresses")
  @ApiNestedQuery(AddressFindManyArgs)
  async findAddresses(
    @common.Req() request: Request,
    @common.Param() params: ContactPersonWhereUniqueInput
  ): Promise<Address[]> {
    const query = plainToClass(AddressFindManyArgs, request.query);
    const results = await this.service.findAddresses(params.id, {
      ...query,
      select: {
        address: true,
        address2: true,
        city: true,

        contactPeople: {
          select: {
            id: true,
          },
        },

        country: true,
        countrycode: true,
        createdAt: true,

        customer: {
          select: {
            id: true,
          },
        },

        id: true,
        typeField: true,
        updatedAt: true,
        zipCode: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/addresses")
  async connectAddresses(
    @common.Param() params: ContactPersonWhereUniqueInput,
    @common.Body() body: AddressWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      addresses: {
        connect: body,
      },
    };
    await this.service.updateContactPerson({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/addresses")
  async updateAddresses(
    @common.Param() params: ContactPersonWhereUniqueInput,
    @common.Body() body: AddressWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      addresses: {
        set: body,
      },
    };
    await this.service.updateContactPerson({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/addresses")
  async disconnectAddresses(
    @common.Param() params: ContactPersonWhereUniqueInput,
    @common.Body() body: AddressWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      addresses: {
        disconnect: body,
      },
    };
    await this.service.updateContactPerson({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/orders")
  @ApiNestedQuery(OrderFindManyArgs)
  async findOrders(
    @common.Req() request: Request,
    @common.Param() params: ContactPersonWhereUniqueInput
  ): Promise<Order[]> {
    const query = plainToClass(OrderFindManyArgs, request.query);
    const results = await this.service.findOrders(params.id, {
      ...query,
      select: {
        contactPerson: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        deliveryDate: true,
        id: true,
        note: true,
        orderDate: true,
        status: true,
        totalAmount: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/orders")
  async connectOrders(
    @common.Param() params: ContactPersonWhereUniqueInput,
    @common.Body() body: OrderWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      orders: {
        connect: body,
      },
    };
    await this.service.updateContactPerson({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/orders")
  async updateOrders(
    @common.Param() params: ContactPersonWhereUniqueInput,
    @common.Body() body: OrderWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      orders: {
        set: body,
      },
    };
    await this.service.updateContactPerson({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/orders")
  async disconnectOrders(
    @common.Param() params: ContactPersonWhereUniqueInput,
    @common.Body() body: OrderWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      orders: {
        disconnect: body,
      },
    };
    await this.service.updateContactPerson({
      where: params,
      data,
      select: { id: true },
    });
  }
}
