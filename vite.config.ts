import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

//https://vitejs.dev/config/
// export default defineConfig(({ mode }) => ({
//   base: '/supriyo-portfolio/',
//   plugins: [
//     react(),
//     mode === 'development' &&
//     componentTagger(),
//   ].filter(Boolean),
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "./src"),
//     },
//   },
//   build: {
//     outDir: 'dist',
//     assetsDir: 'assets',
//   },
// }));

export default defineConfig({
  plugins: [react()],
  base: '/supriyo-portfolio/', // Replace with your repository name
});