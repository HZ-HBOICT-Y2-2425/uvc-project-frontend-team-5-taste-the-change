<div class="bg-white p-4 rounded-lg shadow-md w-1/3 text-center m-3">
    <slot name="image"></slot>
    <div><slot name="title"></slot></div>
    <div><slot name="description"></slot></div>
    <button
        class="mt-2 bg-white border border-blue-500 text-blue-500 px-4 py-1 rounded-full"
        ><slot name="button"></slot></button
    >
</div>
