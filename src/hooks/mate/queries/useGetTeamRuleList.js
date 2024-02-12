import { getTeamRuleList } from '@/apis/request/mate';
import { useQuery } from '@tanstack/react-query';

const useGetTeamRuleList = () => {
  return useQuery({
    queryKey: ['teamRule'],
    queryFn: () => getTeamRuleList(),
    staleTime: 3000,
  });
};

export { useGetTeamRuleList };
