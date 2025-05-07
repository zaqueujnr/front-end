import type Company from '@/entity/Company';
import type Professional from '@/entity/Professional';
import type Work from '@/entity/Work';

export interface WorkGateway {
  getWorks(params?: Params): Promise<WorkList>;
}

export interface ProfessionalGateway {
  getProfessionals(params?: Params): Promise<ProfessionalList>;
}

export interface CompanyGateway {
  getCompanies(params?: Params): Promise<CompanyList>;
}

export type Params = {
  filters?: {
    keywords: string;
  };
  limit?: number;
  page?: number;
};

type Paginated<T extends string, U> = {
  [K in T]: U[];
} & {
  total: number;
  totalPages: number;
};

export type WorkList = Paginated<'works', Work>;
export type ProfessionalList = Paginated<'professionals', Professional>;
export type CompanyList = Paginated<'companies', Company>;
