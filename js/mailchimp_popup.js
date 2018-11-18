

function showMailChimpModal() {
  require(["mojo/signup-forms/Loader"], function(L) { L.start({"baseUrl":"mc.us18.list-manage.com","uuid":"8bd4038863f6b5d6adf96a875","lid":"8b91f1c3ff"}) })
  document.cookie = "MCEvilPopupClosed=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
}

document.getElementsByClassName('cart-button').onClick = showMailChimpModal();
// ** save modal content from html **
// <div class="modal fade" id="joinModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
//   <div class="modal-dialog" role="document">
//     <div class="modal-content">
//       <div class="modal-header">
//         <h5 class="modal-title" id="exampleModalLabel"> Sorry! </h5>
//         <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//           <span aria-hidden="true">&times;</span>
//         </button>
//       </div>
//       <div class="modal-body">
//
//           <form class="pop-up-form" action="index.html" method="post">
//             Which products are you interested in? <br>
//             <br>
//             <div class="row">
//               <div class="col-4">
//                 <input type="checkbox" name="" value="Leather">    Leather Wrapped
//               </div>
//               <div class="col-md-4">
//                 <input type="checkbox" name="" value="Black">    Black Slicone
//               </div>
//               <div class="col-md-4">
//                 <input type="checkbox" name="" value="Gray">    Gray Silicone
//               </div>
//               <div class="w-100"></div>
//               <div class="col-md-4">
//                 <input type="checkbox" name="" value="Funnel">    Funnel
//               </div>
//               <div class="col-md-4">
//                 <input type="checkbox" name="" value="Pink">    Pink Silicone
//               </div>
//               <div class="col-md-4">
//                 <input type="checkbox" name="" value="Green">    Green Silcone
//               </div>
//
//
//
//
//             </div>
//             <br>
//
//             <input id="pop-up-email" type="email" name="" value="" placeholder="enter email here">
//             <input id="pop-up-join" type="submit" name="Submit" class="join" value="JOIN">
//           </form>
//
//       </div>
//       <div class="modal-footer">
//         <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
//         <!-- <button type="button" class="btn btn-primary">Save changes</button> -->
//       </div>
//
//     </div>
//   </div>
// </div>
