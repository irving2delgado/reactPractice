import React, { Component } from 'react';
import IconBox from "./iconBox"


class SocialCard extends Component {

    render () {
        
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
          console.log(this.props);
        return(
            <div>
                <ul>
                {this.props.state.results.map((result, i) => 
                       <li key={i} >
                       
                        {result.name.first} {result.name.last}
                        <IconBox props={this.props}/>
                       </li>
                       
                   )}
                </ul>
                
            </div>
        )
    }
}


export default SocialCard;