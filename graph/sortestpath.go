/* 5
1 4 3 3 1
9 7 3 2
4 2 1 2 7 -1 -1 -1 11 -1 11 8
6 5 -1 4 3 -1 -1 5 6
4 2 5
-1 */
// 多段图最短路径问题
package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

type road struct {
	pos   int   // 4
	road  []int // 1 2 4
	lenth int   // 3
}

type nroad struct {
	pos     int
	roads   []road
	minroad road
}

type next struct {
	nextpos int
	len     int
}

type node struct {
	pos   int
	nexts []next
}

type col struct {
	index int
	nodes []node
}

type mg struct {
	start     int
	end       int
	colnum    int
	colcounts []int
	cols      []col
}

func getInputStrs() []string {
	// for ()
	var res []string
	var s string
	for s != "-1" {
		bs, _, _ := bufio.NewReader(os.Stdin).ReadLine()
		s = string(bs)
		fmt.Println("....", s)
		res = append(res, s)
	}
	fmt.Println("sss", res)
	return res
}

func parseNumber(strs []string) [][]int {
	var res [][]int
	for i := 0; i < len(strs); i++ {
		// strs.Split(" ")
		ss := strings.Split(strs[i], " ")
		fmt.Println("splitss", len(ss))
		var tmp []int
		for j := 0; j < len(ss); j++ {
			// ss[j]
			fmt.Println("splitss", len(ss), i, j)
			v, _ := strconv.Atoi(ss[j])
			tmp = append(tmp, v)
		}
		res = append(res, tmp)
	}
	return res
}

func buildmg(ints [][]int) mg {
	mgInstance := mg{}
	mgInstance.start = 1
	mgInstance.colnum = ints[0][0]
	mgInstance.colcounts = ints[1]
	for i := 0; i < len(ints[1]); i++ {
		mgInstance.end += ints[1][i]
	}
	nowpos := 1
	colindex := 1
	lenpos := 1
	nowcolpos := 1
	precount := 0
	// var
	colInstance := col{
		index: colindex,
	}
	tempnode := node{
		pos: nowpos,
		// nexts: []next,
	}
	for i := 2; i < len(ints)-1; i++ {
		precount += mgInstance.colcounts[colindex-1]
		if colindex < mgInstance.colnum {
			// 需要取的元素数量
			// mgInstance.colcounts[colindex]
			// get counts
			// i 代表每一个点的列而不是每一列， 如何知道i属于第几列

			for j := 0; j < len(ints[i]); j++ {
				tempnext := next{
					nextpos: precount + lenpos,
					len:     ints[i][j],
				}
				fmt.Println("next...", tempnext, precount, lenpos)
				fmt.Println("lenpos...", lenpos)
				// 	var node =
				tempnode.nexts = append(tempnode.nexts, tempnext)
				fmt.Println("tempnode...", tempnode)
				// 换元素。。。
				// 	mgInstance.colcounts[colindex]
				if lenpos == mgInstance.colcounts[colindex] {
					lenpos = 1
					nowpos++
					colInstance.nodes = append(colInstance.nodes, tempnode)
					// lenpos = lenpos + mgInstance.colcounts[colindex] - 1
					fmt.Println("colinstance..", colInstance)
					tempnode = node{
						pos: nowpos,
						// nexts: []next,
					}
				} else {
					lenpos++
					nowcolpos++
				}
			}
			// 换列

			mgInstance.cols = append(mgInstance.cols, colInstance)
			nowcolpos = 1
			colindex++
			lenpos = 1
			colInstance = col{
				index: colindex,
			}
		}
	}
	return mgInstance
}

func caculate(mpInstance mg, res nroad) {
	// caculate the road of all node, and save to the res
	// caculate every column and save the res
	// start from 1
	// get all road of the node and get the min road

	mp := make(map[int]nroad)

	// 获取当前元素的所有可以走的（!=-1）下一条线路

	// 得到当前点的所有线路放到数组，得到下一个点的可能的位置，作为pos
	// 合并每一列的重复点，取得每个点的最小路径，存放到map
	//

	max := 0
	for _, colObj := range mpInstance.cols {
		// group by next pos and get the min road
		//
		var roads []road
		// group by the roads and get the nroad
		// then set the map
		// 			append(mp, tempRoad)
		for _, nodeObj := range colObj.nodes {
			// get all the road of the next
			// and
			preminroad := nroad{}
			//
			if mp[nodeObj.pos].pos == nodeObj.pos {
				preminroad = mp[nodeObj.pos]
			}
			max = nodeObj.pos + 1
			for _, nextObj := range nodeObj.nexts {
				if nextObj.len == -1 {
					continue
				}
				tempRoad := road{
					pos:   nextObj.nextpos,
					lenth: preminroad.minroad.lenth + nextObj.len,
					road:  append(preminroad.minroad.road, nextObj.nextpos),
				}
				roads = append(roads, tempRoad)
				// put he tempRoad to nroads
			}
		}
		getNroad(roads, mp)
	}
	fmt.Println("mp...", mp)
	fmt.Println("TTTTTTTTTTTTTTTT", mp[max])
	fmt.Println("MMMMMMMMMMM", mp[max].minroad)
}

func getNroad(roads []road, mp map[int]nroad) {
	for _, road := range roads {
		nroadObj := nroad{}
		if mp[road.pos].pos != 0 {
			nroadObj = mp[road.pos]
			nroadObj.roads = append(nroadObj.roads, road)
			if nroadObj.minroad.lenth > road.lenth {
				nroadObj.minroad = road
			}
			mp[road.pos] = nroadObj
		} else {
			nroadObj.pos = road.pos
			nroadObj.roads = append(nroadObj.roads, road)
			nroadObj.minroad = road
			mp[road.pos] = nroadObj
		}
	}
	// group by the roads...
	// and set the nroad to the map
	fmt.Println("getNode...after", mp)
}

func main() {
	// fmt.Scanln()
	/* 	strs := getInputStrs()
	   	ints := parseNumber(strs)
	   	fmt.Println("res...", ints) */
	// save the least from
	// var allRes []nres
	// caculate the n then n+1
	/* 	ints = [][]int{[5] [1 4 3 3 1] [9 7 3 2] [4 2 1 2 7 -1 -1 -1 11 -1 11 8] [6 5 -1 4 3 -1 -1 5 6] [4 2 5] [-1]} */
	ints := [][]int{{5}, {1, 4, 3, 3, 1}, {9, 7, 3, 2}, {4, 2, 1, 2, 7, -1, -1, -1, 11, -1, 11, 8}, {6, 5, -1, 4, 3, -1, -1, 5, 6}, {4, 2, 5}, {-1}}
	mpInstance := buildmg(ints)
	fmt.Println("mgsin", mpInstance)
	var res nroad
	caculate(mpInstance, res)
}
