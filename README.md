# koreaplace

한국의 관광지를 소개하는 사이트를 직접 제작해봤습니다.
모바일 반응형으로 제작 되었으며, 
최대 넓이 600px로 만들어 웹에서도 크기를 줄인 상태로 볼 수 있게 제작하였습니다.
JS, JQUERY, 플러그인을 사용해서 만들었습니다.

카드 정보에 들어가는 이미지는 전부 포토샵을 통해서 직접 제작했습니다.
로고도 직접 포토샵을 통해서 제작했습니다.

한국 관광지를 소개하는 사이트가 적어 코로나 이후 국내 여행객이 증가함에
따라 필요성을 느꼈고, 요즘에 유행하는 카페와 여행지 위주로 작성했습니다.

모바일에서도 편하게 볼 수 있도록 반응형으로 제작을 해봤습니다.
처음 진행한 개인 프로젝트로 직접 전부 제작한 페이지 입니다.

## 🖤CSS 가상요소로 호버효과 구현하기  
   ::after를 사용하면 쉽게 구현할 수 있다. </br>
   -> 가상요소란 ? </br>
   CSS 가상 요소는, 
선택자에 추가하는 키워드로, 
선택한 요소(element)의 일부에만 스타일을 적용한다.</br>
즉, 선택한 요소 전체에 스타일을 적용하는 것이 아니라,
요소의 일부에만 스타일을 적용한다.</br>
다시 말해, HTML에 새로운 요소(element)를 추가한 것처럼 동작한다.</br></br></br>


1.밑줄 호버효과 넣고 싶은 부분에 ::after를 사용한다.

   
    nav .left .out_menu > ul > li::after {
    display: block;
    width: 40%;
    margin: 0 auto;
    content: "";
    border-bottom: solid 2px black;
    transform: scaleX(0);
    transition: transform 300ms ease-in-out;
    }
    
    
</br>

display 블럭을 주어 한줄을 차지하게 한 뒤 </br>
밑줄 효과이므로 콘텐츠는 ""를 사용하여 비어둔다.</br>
transform:scaleX(0)을 사용해서 처음엔 보이지 않게 한다.</br>
transition을 사용해서 밑줄이 부드럽게 나타나도록 ease-in-out 과 초 300ms를 작성한다.</br></br>

2. hover시에 나타나도록 CSS를 작성한다.

         nav .left .out_menu > ul > li:hover:after {
        transform: scaleX(1);
          }

</br>
   transform으로 scaleX(1) 로 설정해주면 단순 밑줄이 아닌 좀 더 구동적인 hover 효과를 넣을 수 있다!
