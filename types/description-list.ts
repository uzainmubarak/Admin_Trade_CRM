export type DescriptionItem = {
    id: string;
    property: string;
    details: string; // This will store the HTML content from the rich text editor
  }
  
  export type Section = {
    id: string;
    title: string;
    items: DescriptionItem[];
  }
  
  