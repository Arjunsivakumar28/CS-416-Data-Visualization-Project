console.log("checking third scene!!!")

import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";

let prevNation = "Australia"
let nation = "Australia"

export function changeMetric(ele) {
    nation = ele.value
    console.log("the nation choisen: ", nation)
    timeoutFunc()
}

// const country_color_list = [
//    '#f3c300', '#875692', '#f38400', '#8673A1', "#be0032",
//    "#c2b280", "#848482", "#008856", "#e68fac", "#0067a5",
//    "#f99379", "#604e97", "#f6a600", "#b3446c", "#dcd300",
//    "#882d17", "#8db600", "#654522", "#e25822", "#2b3d26",
//    "#2b3d26", "#2b3d26", "#2b3d26", "#2b3d26", "#2b3d26",
//    "#2b3d26", "#2b3d26", "#2b3d26", "#2b3d26"]

const colorScheme = {
   "Canada": "#f3c300",
   "United States of America": "#875692",
   "South Africa": "#f38400",
   "Zimbabwe": "#8673A1",
   "Namibia": "#be0032",
   "United Arab Emirates": "#c2b280",
   "Oman": "#848482",
   "India": "#008856",
   "Bangladesh": "#e68fac",
   "Nepal": "#0067a5",
   "Pakistan": "#f99379",
   "Afghanistan": "#604e97",
   "Netherlands": "#f6a600",
   "Ireland": "#b3446c",
   "New Zealand": "#dcd300",
   "Australia": "#882d17",
   "Sri Lanka": "#8db600",
   "United Kingdom": "#654522",
   "England": "#654522",
   "Scotland": "#654522",
   "Uganda": "#e25822",
   "Guyana": "#2b3d26",
   "Jamaica": "#2b3d26",
   "Trinidad and Tobago": "#2b3d26",
   "West Indies": "#2b3d26",
   "Hong Kong": "#884cfc",
}

const fileList = ['1273712.csv', '1273712_info.csv', '1273713.csv', '1273713_info.csv', '1273714.csv', '1273714_info.csv', '1273715.csv', '1273715_info.csv', '1273716.csv', '1273716_info.csv', '1273717.csv', '1273717_info.csv', '1273718.csv', '1273718_info.csv', '1273719.csv', '1273719_info.csv', '1273720.csv', '1273720_info.csv', '1273721.csv', '1273721_info.csv', '1273722.csv', '1273722_info.csv', '1273723.csv', '1273723_info.csv', '1273724.csv', '1273724_info.csv', '1273725.csv', '1273725_info.csv', '1273726.csv', '1273726_info.csv', '1273727.csv', '1273727_info.csv', '1273728.csv', '1273728_info.csv', '1273729.csv', '1273729_info.csv', '1273730.csv', '1273730_info.csv', '1273731.csv', '1273731_info.csv', '1273732.csv', '1273732_info.csv', '1273733.csv', '1273733_info.csv', '1273734.csv', '1273734_info.csv', '1273735.csv', '1273735_info.csv', '1273736.csv', '1273736_info.csv', '1273737.csv', '1273737_info.csv', '1273738.csv', '1273738_info.csv', '1273739.csv', '1273739_info.csv', '1273740.csv', '1273740_info.csv', '1273741.csv', '1273741_info.csv', '1273742.csv', '1273742_info.csv', '1273743.csv', '1273743_info.csv', '1273744.csv', '1273744_info.csv', '1273745.csv', '1273745_info.csv', '1273746.csv', '1273746_info.csv', '1273747.csv', '1273747_info.csv', '1273748.csv', '1273748_info.csv', '1273749.csv', '1273749_info.csv', '1273750.csv', '1273750_info.csv', '1273751.csv', '1273751_info.csv', '1273752.csv', '1273752_info.csv', '1273753.csv', '1273753_info.csv', '1273754.csv', '1273754_info.csv', '1273755.csv', '1273755_info.csv', '1273756.csv', '1273756_info.csv', '1298135.csv', '1298135_info.csv', '1298136.csv', '1298136_info.csv', '1298137.csv', '1298137_info.csv', '1298138.csv', '1298138_info.csv', '1298139.csv', '1298139_info.csv', '1298140.csv', '1298140_info.csv', '1298141.csv', '1298141_info.csv', '1298142.csv', '1298142_info.csv', '1298143.csv', '1298143_info.csv', '1298144.csv', '1298144_info.csv', '1298145.csv', '1298145_info.csv', '1298146.csv', '1298146_info.csv', '1298147.csv', '1298147_info.csv', '1298148.csv', '1298148_info.csv', '1298149.csv', '1298149_info.csv', '1298150.csv', '1298150_info.csv', '1298151.csv', '1298151_info.csv', '1298152.csv', '1298152_info.csv', '1298153.csv', '1298153_info.csv', '1298154.csv', '1298154_info.csv', '1298156.csv', '1298156_info.csv', '1298157.csv', '1298157_info.csv', '1298158.csv', '1298158_info.csv', '1298161.csv', '1298161_info.csv', '1298162.csv', '1298162_info.csv', '1298163.csv', '1298163_info.csv', '1298164.csv', '1298164_info.csv', '1298165.csv', '1298165_info.csv', '1298166.csv', '1298166_info.csv', '1298167.csv', '1298167_info.csv', '1298168.csv', '1298168_info.csv', '1298169.csv', '1298169_info.csv', '1298170.csv', '1298170_info.csv', '1298171.csv', '1298171_info.csv', '1298172.csv', '1298172_info.csv', '1298173.csv', '1298173_info.csv', '1298174.csv', '1298174_info.csv', '1298175.csv', '1298175_info.csv', '1298176.csv', '1298176_info.csv', '1298177.csv', '1298177_info.csv', '1298178.csv', '1298178_info.csv', '1298179.csv', '1298179_info.csv', '1415701.csv', '1415701_info.csv', '1415702.csv', '1415702_info.csv', '1415703.csv', '1415703_info.csv', '1415704.csv', '1415704_info.csv', '1415705.csv', '1415705_info.csv', '1415706.csv', '1415706_info.csv', '1415707.csv', '1415707_info.csv', '1415708.csv', '1415708_info.csv', '1415709.csv', '1415709_info.csv', '1415710.csv', '1415710_info.csv', '1415711.csv', '1415711_info.csv', '1415712.csv', '1415712_info.csv', '1415713.csv', '1415713_info.csv', '1415714.csv', '1415714_info.csv', '1415715.csv', '1415715_info.csv', '1415716.csv', '1415716_info.csv', '1415717.csv', '1415717_info.csv', '1415718.csv', '1415718_info.csv', '1415719.csv', '1415719_info.csv', '1415720.csv', '1415720_info.csv', '1415721.csv', '1415721_info.csv', '1415722.csv', '1415722_info.csv', '1415724.csv', '1415724_info.csv', '1415725.csv', '1415725_info.csv', '1415726.csv', '1415726_info.csv', '1415727.csv', '1415727_info.csv', '1415728.csv', '1415728_info.csv', '1415729.csv', '1415729_info.csv', '1415731.csv', '1415731_info.csv', '1415732.csv', '1415732_info.csv', '1415734.csv', '1415734_info.csv', '1415735.csv', '1415735_info.csv', '1415736.csv', '1415736_info.csv', '1415737.csv', '1415737_info.csv', '1415738.csv', '1415738_info.csv', '1415739.csv', '1415739_info.csv', '1415740.csv', '1415740_info.csv', '1415741.csv', '1415741_info.csv', '1415742.csv', '1415742_info.csv', '1415743.csv', '1415743_info.csv', '1415744.csv', '1415744_info.csv', '1415745.csv', '1415745_info.csv', '1415746.csv', '1415746_info.csv', '1415747.csv', '1415747_info.csv', '1415748.csv', '1415748_info.csv', '1415749.csv', '1415749_info.csv', '1415750.csv', '1415750_info.csv', '1415751.csv', '1415751_info.csv', '1415752.csv', '1415752_info.csv', '1415753.csv', '1415753_info.csv', '1415754.csv', '1415754_info.csv', '1415755.csv', '1415755_info.csv', '682897.csv', '682897_info.csv', '682899.csv', '682899_info.csv', '682901.csv', '682901_info.csv', '682903.csv', '682903_info.csv', '682905.csv', '682905_info.csv', '682907.csv', '682907_info.csv', '682909.csv', '682909_info.csv', '682911.csv', '682911_info.csv', '682913.csv', '682913_info.csv', '682915.csv', '682915_info.csv', '682917.csv', '682917_info.csv', '682919.csv', '682919_info.csv', '682921.csv', '682921_info.csv', '682923.csv', '682923_info.csv', '682925.csv', '682925_info.csv', '682927.csv', '682927_info.csv', '682929.csv', '682929_info.csv', '682931.csv', '682931_info.csv', '682933.csv', '682933_info.csv', '682935.csv', '682935_info.csv', '682937.csv', '682937_info.csv', '682939.csv', '682939_info.csv', '682941.csv', '682941_info.csv', '682943.csv', '682943_info.csv', '682945.csv', '682945_info.csv', '682947.csv', '682947_info.csv', '682949.csv', '682949_info.csv', '682951.csv', '682951_info.csv', '682953.csv', '682953_info.csv', '682955.csv', '682955_info.csv', '682957.csv', '682957_info.csv', '682959.csv', '682959_info.csv', '682961.csv', '682961_info.csv', '682963.csv', '682963_info.csv', '682965.csv', '682965_info.csv', '951309.csv', '951309_info.csv', '951311.csv', '951311_info.csv', '951313.csv', '951313_info.csv', '951315.csv', '951315_info.csv', '951319.csv', '951319_info.csv', '951321.csv', '951321_info.csv', '951323.csv', '951323_info.csv', '951325.csv', '951325_info.csv', '951327.csv', '951327_info.csv', '951329.csv', '951329_info.csv', '951331.csv', '951331_info.csv', '951333.csv', '951333_info.csv', '951335.csv', '951335_info.csv', '951337.csv', '951337_info.csv', '951339.csv', '951339_info.csv', '951341.csv', '951341_info.csv', '951343.csv', '951343_info.csv', '951345.csv', '951345_info.csv', '951347.csv', '951347_info.csv', '951349.csv', '951349_info.csv', '951351.csv', '951351_info.csv', '951353.csv', '951353_info.csv', '951355.csv', '951355_info.csv', '951357.csv', '951357_info.csv', '951359.csv', '951359_info.csv', '951361.csv', '951361_info.csv', '951363.csv', '951363_info.csv', '951365.csv', '951365_info.csv', '951367.csv', '951367_info.csv', '951369.csv', '951369_info.csv', '951371.csv', '951371_info.csv', '951373.csv', '951373_info.csv', 'all_matches.csv', 'README.txt']

const infoFiles = fileList.filter((file) => file.includes("info"))
// const dataFiles = fileList.filter((file) => !file.includes("info"))

const svg = d3.select("svg")

const tooltip = d3.select(".tooltip");

const margin = { top: 80, right: 30, bottom: 40, left: 200 };
const width = +svg.attr("width") - margin.left - margin.right;
const height = +svg.attr("height") - margin.top - margin.bottom;

let fileObjArr = []

async function asyncCall(fileName) {

   await d3.text("icc_mens_t20_world_cup_male_csv2/" + fileName).then(function (text) {
      fileObjArr.push(d3.csvParseRows(text))
   }).catch(function (error) {
      console.error('Error loading CSV file:', error);
   });
}

infoFiles.forEach(infoFile => {
   asyncCall(infoFile)
});

let winningMarginData = []

function checkIfFinished() {
   return fileObjArr.length == 206
}

function timeoutFunc() {
    svg.selectAll("."+prevNation).remove()
    prevNation = nation
    let max_val = 0
    winningMarginData = []
    let timeout = setInterval(function () {
    if (checkIfFinished()) {
        clearInterval(timeout);
        // console.log("file inout oibject array: ", fileObjArr)
        fileObjArr.forEach(fileObj => {
            if (fileObj.some(infoRow => infoRow[1] == 'winner') && fileObj.some(infoRow => infoRow[1] == 'player_of_match')) {
                if (fileObj.find(infoRow => infoRow[1] == 'winner')[2] == nation.replaceAll('_', ' ')) {
                    if (!(winningMarginData.map(player => player.name).includes(fileObj.find(infoRow => infoRow[1] == 'player_of_match')[2]))) {
                        winningMarginData.push({
                            name: fileObj.find(infoRow => infoRow[1] == 'player_of_match')[2],
                            pom: 1
                        })
                    } else {
                        winningMarginData.find(player => player.name == fileObj.find(infoRow => infoRow[1] == 'player_of_match')[2]).pom += 1
                    }
                }
            }
        });

        console.log("winner countries and win counts: ", winningMarginData)

        // console.log("the countries: ", winningMarginData.map(pomCount => pomCount.country))

        console.log("the nation selected in timeout: ", nation)

      winningMarginData.forEach(player => {
        const maxFromIndAvg = player.pom
        max_val = Math.max(max_val, maxFromIndAvg);
      })

      console.log("maximum run avg vakue: ", max_val)

      const x = d3.scaleBand()
         .domain(winningMarginData.map(player => player.name))
         .range([margin.left, width - margin.right])
         .padding(0.1);

      const y = d3.scaleLinear()
         .domain([0, max_val]).nice()
         .range([height - margin.bottom, margin.top]);

    let bars = svg
         if (document.querySelector("."+nation)) {
             bars = svg.select("."+nation)
         } else {
             bars = svg.append("g").attr("class", nation)
         }
        
      svg.append("text")
         .attr("class", "title "+nation)
         .attr("text-anchor", "center")
         .attr("x", width /3)
         .attr("y", 20)
         .text("Player of Match Award Distribuition for "+nation.replaceAll('_', ' ')+" Players");

      svg.append("g")
         .attr("class", nation)
         .attr("transform", `translate(0,${height - margin.bottom})`)
         .call(d3.axisBottom(x).tickSizeOuter(0))
         .selectAll("text")
         .attr("transform", "rotate(-45)")
         .style("text-anchor", "end");

      svg.append("text")
         .attr("class", "x label "+nation)
         .attr("text-anchor", "end")
         .attr("x", width /1.4)
         .attr("y", height + 60)
         .text("Player of Match Winners");
        
      svg.append("g")
         .attr('class', nation)
         .attr("transform", `translate(${margin.left},0)`)
         .call(d3.axisLeft(y));
        
      svg.append("text")
         .attr("class", "y label "+nation)
         .attr("text-anchor", "end")
         .attr("y", 150)
         .attr("x", -150)
         .attr("dy", "0.75em")
         .attr("transform", "rotate(-90)")
         .text("Number of Awards");
      
        bars.selectAll(".bar")
         .data(winningMarginData)
         .enter()
         .append('rect')
         .attr("class", "bar")
         .attr("x", d => x(d.name))
         .attr("y", d => y(d.pom))
         .attr("width", x.bandwidth())
         .attr("height", d => y(0) - y(d.pom))
         .attr("fill", colorScheme[nation.replaceAll('_', ' ')])
        //  .on("mouseover", function (event, d) {
        //     d3.select(this)
        //        .raise()
        //        .attr("fill", "yellow");

        //     tooltip.transition()
        //        .duration(200)
        //        .style("opacity", .9);
        //     tooltip.html(`${d.country}<br>Number of Wins: ${d.numOfWins}`)
        //        .style("left", (event.pageX + 5) + "px")
        //        .style("top", (event.pageY - 28) + "px");
        //  })
        //  .on("mouseout", function (d) {
        //     d3.select(this)
        //        .attr("fill", d => colorScheme[d.country])

        //     tooltip.transition()
        //        .duration(500)
        //        .style("opacity", 0);
        //  })
        //  .on("mousemove", function (event) {
        //     tooltip.style("left", (event.pageX + 5) + "px")
        //        .style("top", (event.pageY - 28) + "px");
        //  });
            
    //   svg.append("g")
    //      .attr('class', 'wickets')
    //      .style('display', 'none')
    //      .attr("transform", `translate(${margin.left},0)`)
    //      .call(d3.axisLeft(yWickets));

    //   svg.append("text")
    //      .style('display', 'none')
    //      .attr("class", "y label wickets")
    //      .attr("text-anchor", "end")
    //      .attr("y", 150)
    //      .attr("x", -100)
    //      .attr("dy", "0.75em")
    //      .attr("transform", "rotate(-90)")
    //      .text("Averge Margin of Victory in Wickets");
            
    //   svg.append("g")
    //      .attr('class', 'wickets')
    //      .style('display', 'none')
    //      .selectAll(".bar")
    //      .data(winningMarginData)
    //      .enter()
    //      .append('rect')
    //      .attr("class", "bar")
    //      .attr("x", d => x(d.country))
    //      .attr("y", d => {
    //         if (d.wicketMargins.length != 0) {
    //            return yWickets(d.wicketMargins.reduce((a, b) => +a + +b) / d.wicketMargins.length)
    //         } else {
    //            return yWickets(0)
    //         }
    //      })
    //      .attr("width", x.bandwidth())
    //      .attr("height", d => {
    //         if (d.wicketMargins.length != 0) {
    //            return yWickets(0) - yWickets(d.wicketMargins.reduce((a, b) => +a + +b) / d.wicketMargins.length)
    //         } else {
    //            return 0
    //         }
    //      })
    //      .attr("fill", d => colorScheme[d.country]);

    //      // Hiver tooltip for each country
    //      countHigh.selectAll("g.runs > .bar")
    //         .data(winningMarginData)

    }   
    }, 100);
}

timeoutFunc()