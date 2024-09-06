import { ref } from 'vue';
import { useRouter } from 'vue-router';

export function useButtonActions() {
  const router = useRouter();

  function handleAction(action, linkTo) {
    if (action === 'form') {
      openForm();
    } else if (action === 'link') {
      router.push(linkTo);
    }
  }

  const dialogVisible = ref(false);

  function openForm() {
    dialogVisible.value = true;
    console.log('Formulario abierto');
  }

  return {
    handleAction,
    openForm,
    dialogVisible,
  };
}
