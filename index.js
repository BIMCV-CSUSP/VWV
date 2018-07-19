function show_charts(id){
       document.getElementById('charts').style.display = "block";
       document.getElementById('listing').style.display = "none";
}

function close_charts(){
    document.getElementById('charts').style.display = "none";
    document.getElementById('listing').style.display = "block";

}

function load(){
    console.log("adf hwfdtha jkrhglfkzfhdgjk xj b jksdvhgkjsdfhkjvbsjk ")
    var chart = c3.generate({
        bindto: '#columnChart',
        data: {
          columns: [
            ['data2', 50, 20, 10, 40, 15, 25]
          ],
          axes: {
            data2: 'y'
          },
          types: {
            data2: 'bar' // ADD
          }
        },
        axis: {
          y: {
            label: {
              text: 'Y Label',
              position: 'outer-middle'
            }
          }
        }
    });

    var chart = c3.generate({
        bindto: '#databaseChart',
        data: {
            xs: {
                'data1': 'x1',
                'data2': 'x2',
                'data3': 'x3',
                'point': 'pointx'
            },
            columns: [
                ['x1', 10, 45, 70, 100],
                ['x2', 10, 30, 50, 75, 100],
                ['x3', 10, 30, 50, 75, 100],
                ['pointx', 65],
                ['data1', 4000, 3900, 3700, 3500],
                ['data2', 5000, 4950, 4900, 4700, 4500],
                ['data3', 3000, 2950 ,2900, 2700, 2500],
                ['point', 3500]
            ],
            types: {
                data1: 'spline',
                data2: 'spline',
                data3: 'spline',

            },
            regions: {
                    data2: [{'style':'dashed'}],
                    data3: [{'style':'dashed'}],
            },
        },
        point:{
            show:function(d) {
                console.log(d)
                if (d.id === "point") { return true; }
                return false;
            }
        }
    });

}
