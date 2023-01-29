import { useMutation, useQuery, useQueryClient } from 'react-query';
import {
  getStudents,
  postStudents,
  deleteStudents,
  updateStudent
} from './api';

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

export function useUpdateStudent() {
  const queryClient = useQueryClient();
  return useMutation(({ id, name }) => updateStudent(id, name), {
    onSuccess: () => {
      // Инвалидация и обновление
      queryClient.invalidateQueries('useStudents');
    }
  });
}

export function useDeleteStudent() {
  const queryClient = useQueryClient();
  return useMutation(deleteStudents, {
    onSuccess: () => {
      // Инвалидация и обновление
      queryClient.invalidateQueries('useStudents');
    }
  });
}
