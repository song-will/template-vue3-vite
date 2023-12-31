import { defineComponent } from 'vue'
import { useCounterStore } from '@/store/counter'

export default defineComponent({
    name: 'App',
    setup() {
        const counterStore = useCounterStore()
        console.log({
            counterStore: counterStore.count
        })
        return () => {
            return <div>
                <div>{counterStore.count}</div>
                <button onClick={() => counterStore.decrement()}>-</button>
                <button onClick={() => counterStore.increment()}>+</button>
            </div>
        }
    }
})