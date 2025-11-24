export default defineAppConfig({
  github: false,
  ui: {
    colors: {
      "primary": "blue",
      "secondary": "green",
      "success": "green",
      "info": "blue",
      "warning": "yellow",
      "error": "red",
      "neutral": "neutral"
    },
    contentNavigation: {
      // slots: {
      //   linkTrailing: '', // Show chevron arrows for items with children
      // },
    },
    page: {
      slots: {
        root: "flex flex-col lg:grid lg:grid-cols-13 lg:gap-5",
        left: "lg:col-span-3",     
        center: "lg:col-span-10",   
        right: "lg:col-span-3 order-first lg:order-last"  
      }
    },
  },
})