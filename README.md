# template

reference

- [Nextjs Page Transition With Framer-Motion - Joseph42A](https://dev.to/joseph42a/nextjs-page-transition-with-framer-motion-33dg)
- [template - Next.js](https://nextjs.org/docs/app/api-reference/file-conventions/template)

---

#### why we can't just use layout component to wrap our pages with the transition component:

- 僅會於初次渲染時有轉場效果，接下來進行頁面跳轉時、不會再重新渲染 layout 元件內、也不會有轉場效果
- you can only see the animation for the first render (initial load)
- if you navigate to other pages, Nextjs will not rerender those pages from the layout, so that the Transition will not render for that page

#### templates:

- 於此模板元件內的路由跳轉時，會掛載新的元件實例、重新建立DOM 元素、client 元件的狀態不被保留，並且 effect 會重新同步
- When a user navigates between routes that share a template, a new instance of the component is mounted, DOM elements are recreated, state is not preserved in Client Components, and effects are re-synchronized.

---

#### problem:

- This method doesn't cover the exit animations.
