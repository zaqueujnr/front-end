export interface WorkGateway {
  getWorks(params?: Params): Promise<any>;
}

export interface ProfessionalGateway {
  getProfessionals(params?: Params): Promise<any>;
}

export interface CompanyGateway {
  getCompanies(params?: Params): Promise<any>;
}

export type Params = {
  filters?: {
    keywords: string;
  };
  limit?: number;
  page?: number;
};
