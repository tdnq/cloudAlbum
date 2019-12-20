export default function isShowSign(){
    let pathname=window.location.pathname;
    if(pathname==="/login"||pathname==="/logup"||pathname==="/"){
        return true;
    }else{
        return false;
    }
}