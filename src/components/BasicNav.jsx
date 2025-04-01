import React from 'react'

const BasicNav = () => {

   const NavLinks = [
    {id:1, name: "Home", Path: "/"},
    {id:1, name: "About", Path: "/about"},
    {id:1, name: "Service", Path: "/service"},
    {id:1, name: "Contact Us", Path: "/contact us"},
   ];


  return (
    <div>
       <nav style={styles.navbar}>
        <ul style={styles.navList}>
            {NavLinks.map((link)=>(
                <li key={link.id} style={styles.navItem}>
                    <a href="{link.path}" style={styles.navLink}>{link.name}</a>
                </li>
            ))}
        </ul>
       </nav>

    </div>
  )
}

const styles = {
    navbar: {
      backgroundColor: "#333",
      padding: "10px 20px",
    },
    navList: {
      listStyle: "none",
      display: "flex",
      gap: "15px",
      margin: 0,
      padding: 0,
    },
    navItem: {
      display: "inline-block",
    },
    navLink: {
      textDecoration: "none",
      color: "#fff",
      fontSize: "18px",
    },
  };
 



export default BasicNav
