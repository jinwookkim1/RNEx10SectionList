import React, {Component} from 'react';
import {View, Text, StyleSheet, SectionList, TouchableOpacity} from 'react-native';

export default class MainComponent extends Component{

    // 생성자 - 생성할 때 전달받은 속성들(properties)을 부모 Component에 전달하는 것이 좋음
    constructor(){
        super();
        this.state= {
            //1. 간단히 string들이 섹션별로 있는 리스트
            sectionDatas: [
                // SectionList의 섹션 하나 객체에는 title, data 2개의 프로퍼티가 필요함. 
                {title:'한식', data: ['백반', '고기산적', '비빔밥'] },
                {title:'중식', data: ['짜장면', '짬뽕', '탕수육'] },
                {title:'일식', data: ['초밥', '회', '덮밥'] },

                // 개수가 많으면 자동 스크롤링
                // {title:'한식', data: ['백반', '고기산적', '비빔밥'] },
                // {title:'중식', data: ['짜장면', '짬뽕', '탕수육'] },
                // {title:'일식', data: ['초밥', '회', '덮밥'] },
                // {title:'한식', data: ['백반', '고기산적', '비빔밥'] },
                // {title:'중식', data: ['짜장면', '짬뽕', '탕수육'] },
                // {title:'일식', data: ['초밥', '회', '덮밥'] },
            ],       
        }
    }

    render(){
        // // 1. 간단히 섹션별로 string을 가진 리스트
        return (            
            <View style= { style.container} >
                {/* SectionList에 필요한 필수기본 속성 */}
                {/* 1. sections - 섹션 title과 섹션별 datas를 가진 데이터들 */}
                {/* 2. renderSectionHeader - 섹션별 title 영역의 그려질 render 뷰를 리턴하는 콜백함수 지정 */}
                {/* 3. renderItem - 섹션별 item들(string)의 그려질 render 뷰를 리턴하는 콜백함수 지정 [ FlatList와 동일 ] */}
                <SectionList
                    sections= { this.state.sectionDatas }
                    // 콜백함수의 매개변수 - 위 sections속성에 지정한 배열의 요소개수만큼 반복호출되면서 전달되는 각 배열요소객체 
                    renderSectionHeader={ ( {section} )=>{
                        return (
                        <View style={ style.sectionHeader }>
                            <Text> {section.title} </Text>
                        </View>);
                    } }
                    
                    // 위 sections에 지정한 배열의 각 요소객체의 data프로퍼티 배열의 각 요소들(1 예제에서는 string들)
                    renderItem= { ( {item, index, section} )=>{
                        return (
                        <View key={ index } style={ style.setionItem} >
                            <Text> {item} </Text>
                        </View>
                        )}
                    }

                    //위에서 각 아이템에 key프로퍼티를 지정하지 않으면 경고표시됨. 이를 방지하기 위해 key추출자를 지정
                    //index번호를 키로 지정
                    keyExtractor={(item, index) => index}>
                </SectionList>
            </View>
        );

        // 2. item 클릭 이벤트 처리 - 위 1번 그대로 복사 후 renderItem만 수정
        // return (            
        //     <View style= { style.container} >
        //         {/* SectionList에 필요한 필수기본 속성 */}
        //         {/* 1. sections - 섹션 title과 섹션별 datas를 가진 데이터들 */}
        //         {/* 2. renderSectionHeader - 섹션별 title 영역의 그려질 render 뷰를 리턴하는 콜백함수 지정 */}
        //         {/* 3. renderItem - 섹션별 item들(string)의 그려질 render 뷰를 리턴하는 콜백함수 지정 [ FlatList와 동일 ] */}
        //         <SectionList
        //             sections= { this.state.sectionDatas }
        //             // 콜백함수의 매개변수 - 위 sections에 지정한 배열의 요소개수만큼 반복호출되면서 전달되는 각 배열요소객체 
        //             renderSectionHeader={ ( {section} )=>{
        //                 return (
        //                 <View style={ style.sectionHeader }>
        //                     <Text> {section.title} </Text>
        //                 </View>);
        //             } }
                    
        //             // 위 sections에 지정한 배열의 각 요소객체의 data프로퍼티 배열의 각 요소들(1 예제에서는 string들)
        //             // ####### 여기 아이템 뷰에 onPress이벤트 처리 ########################
        //             renderItem= { ( {item, index, section} )=>{
        //                 return (
        //                     // View대신에 TouchableOpacity로 변경
        //                     <TouchableOpacity key={ index } style={ style.setionItem} onPress={ ()=>{ this.clickItem(item); } }>
        //                         <Text> {item} </Text>
        //                     </TouchableOpacity>
        //                 )}
        //             }

        //             //위에서 각 아이템에 key프로퍼티를 지정하지 않으면 경고표시됨. 이를 방지하기 위해 key추출자를 지정
        //             //index번호를 키로 지정
        //             keyExtractor={(item, index) => index}>
        //         </SectionList>
        //     </View>
        // );

    }//render method..

    //2.실습에서 사용할 아이템 클릭(onPress) 콜백 메소드
    clickItem= ( item )=>{
        alert( item );
    }

}//MainComponent class..

// 스타일 객체
const style = StyleSheet.create({
    container:{
        flex:1,
        padding:16,
    },
    sectionHeader:{
        padding:4,
        backgroundColor:'#eeeeee',        
    },
    sectionTitle:{        
        fontSize:14,
        fontWeight:'bold',
    },
    setionItem:{
        padding:8,
    }
});


