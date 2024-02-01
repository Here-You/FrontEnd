import { useMutation, useQueryClient } from '@tanstack/react-query';

function useDeleteSchedule() {
  const queryClient = useQueryClient();
  return useMutation({
    // mutationFn: (scheduleId) => deleteSchedule(scheduleId),   //일정 삭제 api 필요
    onSuccess: () => {
      console.log('일정 삭제');
    },
    onSettled: async (_, error) => {
      if (error) {
        console.log(error);
      } else {
        await queryClient.invalidateQueries({ queryKey: ['schedules'] });
      }
    },
  });
}

export { useDeleteSchedule };
