import { useMutation, useQuery, useQueryClient } from 'react-query';
import { getStudents, postStudents } from './api';

export function useStudents() {
  return useQuery('useStudents', getStudents);
}

export function useAddStudent() {
  const queryClient = useQueryClient();
  return useMutation(postStudents, {
    onSuccess: () => {
      // Инвалидация и обновление
      queryClient.invalidateQueries('useStudents');
    }
  });
}
