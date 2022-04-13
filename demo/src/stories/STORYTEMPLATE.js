import Takeaways from '../components/mdp/Takeaways'

// STORY DATA AND SUPPORT OBJECTS
// Example HTML Fragment for use in the header and footer
const htmlFrag = <div>Footer Example text</div>;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: "Comp",
    component: Comp,
    argTypes:{// custom types that appear in the Controls
        footerContent:{
            options: ['Div', 'Link'],
            mapping: {
                Div: divFooter,
                Link: linkFooter,
            },
            defaultValue:{key: 'Link'}
        },

    }
} // this is the story

const  Template = args => <Comp {...args} /> // Create a function that returns our component ( button) and passes all ags to it

//STORY VERSIONS
// List different versions of the story below
export const Ver1 = Template.bind({})
Ver1.args = {  
    headerContent: 'Div',    
}

export const Ver2 = Template.bind({})
Ver2.args = {
    headerContent: 'Div',
}