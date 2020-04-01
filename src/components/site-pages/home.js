// // import React, { Component } from "react"
// // import $ from "jquery";
// // import "turn.js";

// // export default class Home extends Component {

// //     render(){
// //         return (
// //             <div>
// //                 <div id="flipbook">
// //                     <div class="hard"> Turn.js </div>
// //                     <div class="hard"></div>
// //                     <div> Page 1 </div>
// //                     <div> Page 2 </div>
// //                     <div> Page 3 </div>
// //                     <div> Page 4 </div>
// //                     <div class="hard"></div>
// //                     <div class="hard"></div>
// //                 </div>
// //             <script type="text/javascript">
// //                  {$("#flipbook").turn({
// //                     width: 400,
// //                     height: 300,
// //                     autoCenter: true
// //                 })};
// //             </script>
// //             </div>
// //           );

// //     }
// // }
 



import React from "react";
import $ from "jquery";
import "turn.js";


import Turn from "./turn";

const options = {
  width: 900,
  height: 600,
  autoCenter: true,
  display: "double",
  acceleration: true,
  elevation: 50,
  gradients: !$.isTouch,
  when: {
    turned: function(e, page) {
      console.log("Current view: ", $(this).turn("view"));
    }
  }
};

const pages = [


  "https://lh3.googleusercontent.com/aFTN0A-Y4htvH5gdxdbZKlVqrOkfh-Kq1bLDZAMQcESQ0PXyLAqAnpfTIjtMhKJfMU9TqUyMAjtBi2Mowlo3_XdhgZOpPsvDZw-dGePIJ9rjc7HO4Pl_WfHK2OkxxZ567LE_aD7hFdpFX4rpu5j5Huwoq4L5tzASIftCyh3NCpLbD0WFgTzd20OTcyV1ZUG8et1wyDlev4_SUhzeDuMNt-gQeC5TD8ASTQ2mAdQXzrRnUAHD7Mj3Tvu_y1IO9VRF6gmM-bXccNQ335wym_TT-m0128m8P_Vqonh9NIxtjFt8-5ne6MvZbBAsKTD0B-EOU3zvzG-6bPh0pxDvzcbWWaChdypmoXIj-b9oZ8JrUsk1cbpayCWr4niH7ZfDP1oyueXxIQTULA-3Oy4JzrHDsoxjBofP0EI0DpkfAre5nPykRojV3pB1F1l46zEVHCVSTdeRq7pLADJjpvIvs6wHL4o7zjVKcVO4GroOWG5gmKd8Mmf0kBKfve1g3Yf0BUU5C_nZiwz_KuKUnuJhvlxLd4FAmFJ00NhBJzWi7D5kwHons5OsXyvLjDHnv81EwydDB3zkI0zVPYx72xhrxtt5jH-a-JJLyPUCXJtVSvR7rW-76HSx1GHmavRHOlcj2hqEMwAVHTOyX6ChvJKfXkvFLPXqR6Fiiqu0Nxt5q2GHX3G4JaUK1OIYZ-FJSQDbqw=w687-h888-no",
  "https://lh3.googleusercontent.com/aDrsTrxs5BKVOBdtOtCYDQFZH5Cw7WkSbjtZhmWkTfB97Mj9vslXxCalF8E3X8GGNYMtQCfjMjfr57ckflGtZ7O9pSPrmjl2emvYVesYr1okWL7Q5xPx9SeLPOFaZwTFMpag6V8MHksx9uVCe9-xlFMFPLqhR4l4W0ptxr1RV_8G6fqDHVxvnEogjkd5r7w5PqVIUuFUBzvvZLU2Pcn5SjZfrTsSrTeNdJ0NC16fAid48TWhU9_Mv-qdxL7Oa31CriYQBiALEA4vlqTdk3MrBqOADoxsEeDaX6ZDNd0SrIcLMW_lKKPOli0mnEECKZookVo7t-7Aa0O_5tNEbRRzwdf2rwxHPDsqJJ4wNOe7Q0DCQFVIsYEOKMuR1lkMt3uLj0xfDAOMjHDqcqm2nfQVYo6U4_RxdYl2xHzVs_Pqa8yOykvLbuFS3VhhdKOkFTkAew9xzAnMBxPR06y6phdA2lZhDxi0Q5Dnsgrxd79qQ0J8OQf0W44NX-GASqEPDv6ayPuNh4cbGFkvnYWTRggXiBrz-irvqMqItFdDPvZ5C0D6aPeo8eVXI5-2iAeasDEErBUMG7-i6WAulmzKMwMmDpXNg1-Vue2xGjnpsZirnGUU76J3gJiIPvuJH_xzhM0JA0NtMr9_hMlj7HOXJDsAZKMY1M1x-8Z9pWqGxtHivITNubySfmnCST11xINRgQ=w500-h648-no",
  "https://lh3.googleusercontent.com/khhooSSvu4y13UYPFjO3Qs4Sw7r9oXDo2MAJQ1ANwRPXVb8W_IznJnu5z3C6Bof4bk-CYM_rLpNEgTCCRTVLE0BXenEkFoUi1kT6bOHzxKq0t5AEujWimamYNph_T0LR43sxssWhFHA8I_95FD55eKMS5or9YLfrQAFNy5AxliT6Xuh35zCvMkEU3bqsypipNbrVQ9z96pVgi7wOloV1MmiVOjxDr2Ir8Y2yyO7Kn9mE46ayz2Q1f6ne3vSVmqwEjoTP7SgBbzLntY5A5HKkMZf7-7-xmDEoVo6WCcyqP4mXiCwlg0_4wftLic7ndeihJPxO-7F3G6UZTYJbTUMmcTCoPqi6ocQzUgtlawTYY8mlSkOBkRwthuXlPciGfk5svspq5QDvLYH5TT_vJ3fYWb-48I48CEAHcw3KmIS-L0lYFZNKReL86vUghA3U-xrwNdouQTF5WsKUEwurtUUbsbEqFE6I_r-mobzzqYFmIOex7HkAW_dn_lCRZ90ukdi74jiRcoJJEC5Gmg1uWVqDHLzpF275sU__HmpjeqX0TahbKpZ-7eb1N9V2tdMZZUbwryZ3pxMbE_MuET-G-IOGE_rSHS4ioD5DUddhz2BSTPGIi3yOgG8kjlP1BJt0Vv1EQLF--zbxZ9BtC6nevujrNXMVKfUMwj-nswlxoK9DGFU2d33DyZKtftlCsP-rIg=w500-h648-no",
  "https://lh3.googleusercontent.com/4YoHjb8jXav9XjIKgIM7yHGMkvMYYcn-p7IDL_H0i0pAqOzfA1aYZoEs-jqCe73xDrAwz0i8aZsrd0-YY1IwrBdT1IV07De7JJXZenmEHG4yvdDTX-jtwhSf8ojg7olTsS5wydVBhjVLhlfMsz3ouQyCL-lbivTzK5j8icVT3X42hLylWQpWrhGCgb0PUIsG5YJrv06tnfsQysC8d2YO6g6TspdK87VzoYyjxB9mQ_O9bAHJcswGJOwR6n8jKOIVND_KoGB3L9QuJTr_7YhA4wnOcTioTw3XxXHvR3JW5SyvG-ZpU46EK8DgkTr_BDoytovrghwfBRdw5f5hrX__S542U9SVoLtHmtrbwDuAbBXWFUW6Upbz7nCG26SG77W40jIJGiQA5HuLJN-3PupBRAOj8O5u_T8tEsg11QwKmtQABCX6WjNXaaoEDycedXGF7vnTbYeWeg2xCh1Bi_vyFKbzIajjKrzF3iNXTqOocG6qXrTVZNfjnZM14iId3xQfmu7qIizuv6sbiYLZiDJG-BYnNxSBmLUt8mWgo9fuGcpthXNcwzjFrg-BIwDh9hufX0OU7VxOB6aAWqQNXfUDpa6oh6AB6Crx4zoZv7ovCvUb9qpE8SrZindDq8nXa6X_N5MCXzcHTZPmv9drscEN6pXq_U142iFUpORNSElCdFECrtgV4GxEKCz0vMDIPg=w500-h648-no",
  "https://lh3.googleusercontent.com/fUiv8r0OVQ3lPWtH6LKLh-nPwWzey3H9AL2zFn0VEj7o6ddlR51KVLdg32Cymu905OFOG7i_fig2QOYSDf6FX80p8Klk8DhMdXteSoRi60tfxrzY7Q3cZcxuh2wpTcUSSUSj1PXcCpdyOUtCLyLE1O-CMKszoAYfws-XtN4AuDgCPYH_zcmkS_ohk6vjh7NZ57AEMKHQcK28pg4RI6N4nRnYIwix9VgYjvnSJZaUPirNl_V5AXLNgRv7J8UU3MZZzb-csn_DhMwGJpp9yz0KetzO0VkgQ4fqzBzQ89d3ucp7BthTvK4ym1IMTXJI6P16_2BzrT_xXYELzXHeNd-1VsPLoUD-_0nz8kvePkJTm69HZouLXNYKTvPbPg3xjdS9Q_wg6w5KUqVGCCRnnIeM4BxESEsD3fwDBqAEzM2NLayU1ApA0c5-5ykdYezZ5d8Vd9knrYiX7xEq8bRIFNKB_fkuKjN9lw4AzgzLWvviVU7WivinwpaKip3aHaH375TexQgqHNjNqnGQ1OdpbekDy6_Wjw1WgW8FQLTxE_0v9cyC9vifadIT3gDcAdnzzv6HqjHogliB6zKjX3z045sFrdzD5uEztmdmUTSaqkXwpi_nH-_-aQ2XbaZ4uNL3FLLzH9uvhWqQ4pwUSDFrzGKw07Q0AjGPFXcDvV6NW5oGuDMGiu9EfTdkW5jf_ljOlA=w500-h648-no",
  "https://lh3.googleusercontent.com/BsVL4EeMHwb0yT5_9vy6otju9ovUWu1Kl5Qbk7_1HWrvrJY3sgVv_OoW-xLr_-7l8uTYp6PR9yDvzq1Z16cehLB65KdN7j0GhMI-IqIsYWIbqq1RGV3BrTqeJL5NKHunDdWhYyjs17ChOt0bNYIxWl5cPy2Nv2E0UUGAzisb9mlgCHYRUyqnDMybFm_88Sile3EyMyKDPEiYx_2ghvDqcdHpPeriwhnWmv4WPKvexlRi5cIVIM-t1MNiCGVl55mHPR9A5gIbx2yxc68_jXHs87eahuviqIUJAJ_9YuHbNyrbBCy9PboWnou74PThIAiLecKR677O1JXgZ5NHqGrJVcCYuS9xxSCUwJL57LLqDgZnwSYSDc04HdNHXhPavf59h31e-ltQ6sKPkUKMEyparmqYnLJsegiF9tqCLF4gK37yEzY3AfeVizM4qQr1NFlbP1RpvmjhycNeDZF3OtuQmXaIoebYJ3hajdfoVgcct1ZL80xcw-qncFXAOJle1oOlEaaf9bAsj9W0_cfq5UAYQ5E8H2GsnDXMkuY-Eibo4EBDov2Z9v20FDfI9LOz0_4xofgYYxSXQDvHntvMYY2M-ClqEU7w-L0UJEvJ2qJe8fSFy-GkmQLxThjScGMFd39tghmhfYtGCfy9c3bXYQMG6UKlKZVfL0vRujepn21ZnrjKr52XHBRq6ybGCrUrWQ=w500-h648-no",
  "https://lh3.googleusercontent.com/zRVuUSuX7ETu-crwCAhVP4Lv-dcJDJMc_truH3Ohn2sXBoZ7BjZP3gYq_ow147MBjvalq-9RnJtBhnVGRR1696WqkjDgiqZzHHaDcURJNu3SMeCaOc9rFQGcPuvssryyVVRxOr4aIEcJNrRlWRJB_6KMRQmiI8PFTaer1jnavJWDzUasHPJ_PW9MSQpe1vpiht0C_JDmUBhOV-tGTYqYvuNppiAIB8vvKHkNwY3U_klGfG1eW8DdbS-IUKsefyh8yzXVbY3XfoBfW2w4WdZ6xWmd_bM6CTvFEklKtHcPWcVuAPldklVtuI0Vlok58Y6gdl5TO_oGZbmaWFd1qNvVNAjWCMMlor-KZFjzWURlM4Azqnzv5WWb7rQ_fqy4If2zMbHAmriSTcmAJtOsrQ9L1HN1A1I1oe73HZ6MosXg3K2OBuuL714WNGQJs7ne-BBqdYxNtIAcK5vwh1RUVlkGAKCT8LPKgP_FGbtUiAtINVBhIXljXveERZ8IBxsHcuVjyNstsblsvVYpWU_eQuNSJ6bsty3OITZdsFuzRtDiXyyfDLxrsypKkyj8jZKvvnEspaPC3ewKUOJ_3A2dzYooU4Zc9TjXIbvG8Z8npPEDgybm6Ndygqkx42irVsfoBOByEDlKGr9TL7sXf_88-WjRXPCbZysT3j2ILqt7DIyTk0yukA9eBepAXaHDiOcp5Q=w500-h648-no",
  "https://lh3.googleusercontent.com/AM-o-tfyGeRiqmLCqdfK4N1HIciaVBkeMmohMwnTqmmllTfjqt-tGT2LT8yIwyaVUpmmAt3jlrFd4LWLqiv3sR5oiPrWD5H3YcZ6fIhCq4LjzondGSgQQo_66qrNIOMZwECrzh-oi_KRtzArnHaPdoIDApcVi5aCJDwklyIixot-F-B0b71AW-t0PmgHAeP_B3z-VWWjabspfJ2HnqxQb2Q14revmZYZvipGF2UGBHVKRcji8-b0FdqOI2WwVtbV-Vb_D5FXi3C_k_5_pi5oJtTBVmQqtUXNqCobFXKZfNf7qRiAMO3GNHiXwIfeJMk6AC6Y2LlcMfqYIefbdCf-dOAKRREi42GJ4YFQ5G4KZt5BUC6KUqygLF0yTIjp1BVzrGoz1DSyZZb9Txnrl7-vOdUEiPOGQcdszih9kmQEwN_LYOz4qt2Fg5qHA8N8OdyDdQil23Y9YHiuzOrzwrTc5-YPYWCk5Ji_vsr6CoNeQqbtjQgAWJ3czPji1txrZtfpSOWT_nw55KWHh7iXvu6Axz1pvqW2wImxOVFY1qjBvkB52xCOFtflUZWJhvZgjOnnYyl66judcMUvHXql3rT8XxcGnNS8b7zQtkGKmMV4gczOW4dhn-9E13iRuA9nLdShlcv2CEg54gv_fYWn4r17oB5FnJuJZg9PuUil7sfKgbe6pUXoqrUEjArkEf42Gg=w500-h648-no",
  "https://lh3.googleusercontent.com/Mm17ujPB3lIho-AXbKiXNj4dKOX2ueFHxfFnZ90NaXi6f8aySiCPQMUgauDb-otI5w7uzCulRyPtEAz-Q3Uyx9hLfyTniGDPyHUM7pIS0OUISYHE3OW79hk2W6dRHgn3hM2URbU0HayXQcRFuezIQ7rpDPPNxNSGDEjhnXcAiVRXEOw1bWUwEW-nHwThXK1uLL6maBCta_tJLuEg60uSThsaGp_qaqgAn20jeVtlIAsWiloC1EaDUmG7GnqLXcrV62Zhm7yACwqmJakmjUVp5kpyoCXHPuAJbJg0VeQpKll4yOYbl5qb50i91rdE8sZ9QQA5f4aBQq5yoWFHEZORHAqhzlp09It7_-4BTGKk2ZxUTCgXfDzCpkLSbCiRDi3u9ugUlAq0iecIRngYlj9jT3CqcavNI_d8KXmDua2Xo-nTdCL3eAUTYwTYSAb9sFCbmqquT1Hpo1vlw4oqgtdptb5g3RmbjPqxZlw3l-mHIbKChvq6hDWr3schI4uF-4IhlO7vcuguLPpPcvSjl-jQn_YocFmYDuaRVsZ8TWuw5LX9N8lGY2HnZ80fEJgWyRsjwum4nTWWtwufvF_9jL8ofQqr4SGBAzBTfqop6BqRPnWoZlBhVe3sOYOl9QtoIhKfM-Np4-C0211nB-sksuQmE6_3Ezu80wdO94DMMDLjeVHCV25gLhKOrEgHxCkW8g=w500-h648-no",
  "https://lh3.googleusercontent.com/sN-p76VvWImxYh-oDEUrG-yKDitA6akTij5_wdA1_O0LuqF7e92z2yyycL84VsoF48BYUbMXhcuWuGCLqmoAnrAw2-TZlESTkBEYkXczP28S43NtrPeFqW7uyVbYPB2nkhi8-vy7hLfBaXuNCto7-J0cjCk7naOMBbQh5rUJTi-Hzs_VZIvVCTAa1DEHzb1KI6jet9Q9xNPHFvvZtqL9Zhote9Hos3d2bJdcvGe-QI7OzfEvNZPR1oJJkveq_nmU2vVwAItDIgDLjMgZfXJtnhaGN_g_queU4FOPOBJTWTwlTRoIqwn-LvDbgT42r-ZyBIIgTZDUlVpsIMS8ZKYimYP_iaTq1h-qccfEg4ER46pEam1q8SObzfUqce8ZmrRygW0k2JbB2E2Qy3abgx_wMBeIx2NZuKyTsd5helyVkL220ycFlLKd13hWozML2TqVVrbpMgMlmub0jsq4hNyqQ5N3ecjiOzElqb67_lN3xptw8IqT7gcPyHo8XzM1vrLz-p6Ca3EQNSMG3DsuHE3VLOfTgTQpzJ0qs3s1y6ONgQdpUJPMSUWO8JrRjrLToPHuoZ3nx9K84BLlV6D3FOXuczGG8oGvvMW2hiGhIuUPgwynmSfS5ecyvrh11OKk8BoASUawFH15uwtGrJNoWkCzz-AzG4uXbbfwFy7GLHuozyIiCPNGcmkwRi_B0wF5nA=w500-h648-no",
  "https://lh3.googleusercontent.com/7e2T0VddhL76EGoICz6ybISXcu2KRujDxlAjXyeMuXtOZvbmnfWBIfLAUFwsZE-YQxFhAiQTK1D7GfWbmT_7Qguk27S0IYmW21ZVgod-413-fp2GI2PfT0Q4ObAquJz2zropnEq9PeSjIgBb53EHQYi6eNTrbo_-V8McXlSlQMgAU9cIPaIl-KhIw4xOudyRTcNqMnkz-5gChlwkGYSG-o8LKfpvonRWGSipA9-Ns5QBIIokIzuFbAMavwucWcSt0-AJzgQnWDBUE87fv9syxcV3ZedVvrD6y2JgyAehaVvToVkIzXTEMcWGN76BSC_ialNQTRd0OELKg34kdWvrrnMWb3PTT0jwOTWiukF4iUhWeDKknIQl1SCMwjZMcbhjvcWZh8beH1icC_H-0Ajs__1CBfKNtlCC2gzyxYzxV9FNivOkKvqeW5vZ2M3KVFLRmkAfmG8VVYb2r1NRfQz8B2v8W9aXzHE9-XHFvfvLyPs7hAjMBgtmx88bmeYTIz5Oa8kUTrvfHf7zWK1nlFpb7f9u2iaw4vu7USg6CzUnuVuoTDq-dl2F3XWEe_uAMo87Hh18HETRm0g8JppgkYtsU4rKJZjhR8ckFKoO7XFABUsuyL5ttkI5QCZNOnDxNty4YsOWc_RraPjSXCu2wY0E4tyzb7Z4rHZl93C1lLkGsAKCWR4SDTQ4fNyObzGXsg=w500-h648-no"
];

const Home = () => {
  return (
    <div className="home-page-wrapper">
      <h1>Read Mr. Zee's Poetry</h1>
      <div className="home-content-background">
        <div className="book-wrapper">
          <Turn options={options} className="book">
            {pages.map((page, index) => (
              <div key={index} className="page">
                <img src={page} alt="" />
              </div>
            ))}
          </Turn>
        </div>
      </div>
    </div>
  );
};

export default Home

