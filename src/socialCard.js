import React, { Component } from 'react';
import IconBox from "./iconBox"


class SocialCard extends Component {

    render () {
        const Photo = {
            width: '60px',
            height: '60px',
            backgroundSize: 'cover',
            borderRadius: '50%',
            margin: '10px'
          };
          
          const bold = {
            fontWeight: 'bold',
          }
          
          const flex = {
            display: 'flex'
          }
          
          const list = {
            listStyleType: 'none',
          }
          
          const ADbox = {
            height: '315px',
            width: '550px',
            borderRadius: '10px 10px 10px 10px',
            border: '1px solid #e5e5e5',
            marginTop: '10px'
          }
          
          const boximg = {
            width: '400px',
          }
          
          const icon = {
            height: '20px',
            paddingLeft: '10px'
          }
          
          const picbox = {
            backgroundSize: 'cover',
            backgroundPosition: 'center 35%',
            width: '550px',
            height: '200px',
            borderRadius: '10px 10px 0px 0px',
          }
          
          const wordbox = {
            padding: '15px',
            fontSize: '14px',
            lineHeight: '21px',
          }
          
          const gray = {
            color: '#aaa'
          }
          
          const iconword = {
            fontSize: '10px',
            paddingLeft: '10px',
            paddingRight: '50px',
            position: 'realative',
          }
          
          const red = {
            color: 'red',
            fontWeight: 'bold'
          }
          
          const iconbox = {
            marginTop: '15px'
          }
          
          const largebox = {
            fontSize: '14px',
            lineHeight: '21px',
            border: '1px solid #eee',
            borderRadius: '5px',
            backgroundColor: 'white',
            boxShadow: '3px 5px 10px #9b7c6c',
            width: '650px',
            margin: '20px auto',
            padding: '15px',
            justifyContent: 'center'
          }
          
          const blue = {
            color: '#7ABBE7'
          }
          
          const listspace = {
            marginLeft: '10px'
          }
          
          const hrwidth = {
            width: '650px',
            margin: '10px 0px 10px 0px',
            borderColor: '#fff'
          }

          var info = { data: [
        {
          id: 1,
          author: 'Cookie',
          bio: 'Quam nunc et donec nec turpis a, semper.',
          photo: 'http://michaeldepippo.com/wp-content/uploads/2015/04/Monster_Bite_ChocolateChip_2.jpg',
          adpic: 'https://images-gmi-pmc.edge-generalmills.com/5504a4d4-ac62-4e63-b475-563ba492ccff.jpg'
        },
        {
          id: 2,
          author: 'Cakeee',
          bio: 'Lectus phasellus, mi ut nam velit per et dictum.',
          photo: 'http://img.taste.com.au/Dtv0xl-v/w643-h428-cfill-q90/taste/2016/11/black-forest-cake-92535-1.jpeg',
          adpic: 'http://assets.kraftfoods.com/recipe_images/opendeploy/%20138280-49fdab4f7bf207b3cc31f72186c86b0a642f0802_642x428.jpg'
        },
        {
          id: 3,
          author: 'Fruit',
          bio: 'Ipsum commodo, et placerat neque cursus.',
          photo: 'https://therawherbalist.com/wp-content/uploads/2017/12/04-ZS-Banned-Fruit-80-ab.jpg',
          adpic: 'https://spindriftfresh.com/wp-content/uploads/2017/12/fruit-header-1.jpg'
        },
        {
          id: 4,
          author: 'Chocolate',
          bio: 'Ipsum commodo, et placerat neque cursus.',
          photo: 'http://dubeat.com/wp-content/uploads/chocolates2.jpg',
          adpic: 'https://aadl.org/sites/default/files/inline-images/chocolate_0.jpeg'
        }
      ]
    }
          
        return(
            <div>Hello there
                <IconBox info={info} />
            </div>
        )
    }
}


export default SocialCard;