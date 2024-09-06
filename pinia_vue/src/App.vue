<template>
    <div>
        <h1>{{store.title}}</h1>

    </div>
</template>

<script>
import { useTaskStore } from './stores/taskStore';
export default
{
    setup()
    {
        const store = useTaskStore();

        return { store }
    }
}
</script>
