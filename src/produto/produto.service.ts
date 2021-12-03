import { Produto } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { Prisma } from '.prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ProdutoService {
  constructor(private db: PrismaService) {}

  async create(data: Prisma.ProdutoCreateInput): Promise<Produto> {
    const produto = await this.db.produto.create({ data });
    return produto;
  }

  findAll() {
    return `This action returns all produto`;
  }

  findOne(id: number) {
    return `This action returns a #${id} produto`;
  }

  update(id: number, updateProdutoDto: UpdateProdutoDto) {
    return `This action updates a #${id} produto`;
  }

  remove(id: number) {
    return `This action removes a #${id} produto`;
  }
}