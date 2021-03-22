export default function HamMenu( {onClick, isOnTouch} ){
    return (
        <>
            {isOnTouch ? (
                <span onClick={onClick} className="hamMenu showMobile">
                    <span className="hamMenu-bar1 hamMenu-bar1--touched"></span>
                    <span className="hamMenu-bar2 hamMenu-bar2--touched"></span>
                    <span className="hamMenu-bar3 hamMenu-bar3--touched"></span>
                    <span className="hamMenu-bar4 hamMenu-bar4--touched"></span>
                </span>
            ):(
                <span onClick={onClick} className="hamMenu showMobile">
                    <span className="hamMenu-bar1"></span>
                    <span className="hamMenu-bar2"></span>
                    <span className="hamMenu-bar3"></span>
                    <span className="hamMenu-bar4"></span>
                </span>
            )}
        </>
    );
}