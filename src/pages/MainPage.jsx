const MainPage = () => {
  return (
    <div className="mainPageContainer">
      <h2 className="mainTitle">Welcome to the User Explorer!</h2>
      <p className="mainText">
        This is a simple application where you can explore user data retrieved
        from an open API. On the main page, you’ll find an overview of the app,
        and on the “Users” page, you can view a list of users. By clicking on a
        user, you can access detailed information about them, such as their
        email, phone number, and address.
      </p>
      <p className="mainText">
        This application allows you to easily navigate through the list of users
        and explore their profiles. Enjoy the exploration!
      </p>
    </div>
  )
}

export default MainPage
