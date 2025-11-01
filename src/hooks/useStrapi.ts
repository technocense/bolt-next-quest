import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export interface StrapiResponse<T> {
  data: T;
  meta?: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export const useStrapi = <T>(
  endpoint: string,
  params?: Record<string, string>,
  queryKey?: string[]
) => {
  return useQuery<StrapiResponse<T>>({
    queryKey: queryKey || ['strapi', endpoint, JSON.stringify(params)],
    queryFn: async () => {
      const { data, error } = await supabase.functions.invoke('strapi-fetch', {
        body: { endpoint, params }
      });

      if (error) {
        throw new Error(error.message);
      }

      return data as StrapiResponse<T>;
    },
  });
};
