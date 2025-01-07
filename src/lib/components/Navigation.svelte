<script lang="ts">
    import { onMount } from "svelte";
    import { page } from "$app/stores";

    export let modules: Record<string, () => Promise<unknown>>;
    let menu: Array<{ link: string; title: string }> = [];

    onMount(() => {
        for (let path in modules) {
            let pathSanitized = path.replace(".svelte", "").replace("./", "/");

            // for group layouts
            if (pathSanitized.includes("/(")) {
                pathSanitized = pathSanitized.substring(
                    pathSanitized.indexOf(")/") + 1,
                );
            }

            // for dynamic paths -> needs more triaging
            if (pathSanitized.includes("[")) {
                pathSanitized = pathSanitized
                    .replaceAll("[", "")
                    .replaceAll("]", "");
            }

            pathSanitized = pathSanitized.replace("/+page", "");

            const link = pathSanitized ? pathSanitized : "/";
            let title = pathSanitized
                ? pathSanitized.substring(pathSanitized.lastIndexOf("/") + 1)
                : "Home";
            title = title.charAt(0).toUpperCase() + title.slice(1);

            menu = [...menu, { title, link }];
        }
    });
</script>
