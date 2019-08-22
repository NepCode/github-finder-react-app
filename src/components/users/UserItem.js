import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const  UserItem = ({user: {avatar_url,login,html_url}}) => {
//const  UserItem = (props) => {

   /*  constructor( ) {
        super()
        this.state = {
          id: 'id',
          login: 'asdasd',
          avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
          html_url: 'https://github.com/mojombo'
        };
      } */
     /*  state = {
        id: 'id',
        login: 'asdasd',
        avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
        html_url: 'https://github.com/mojombo'
      }; */



       /*  const {avatar_url,login,html_url} = this.state; */
       /* const {avatar_url,login,html_url} = props.user; */

        return (
           <div className="card text-center">
               <img 
               src={avatar_url}
               alt=""
               className="round-img"
               style={{width: '60px'}}
               />
             <h3>{login}</h3>

             {/* <div>
                 <a href={html_url} className="btn btn-dark btn-sm my-1">More</a>
             </div> */}

            <div>
                 <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">More</Link>
             </div>   

           </div>
        )
    
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired
};

export default UserItem
