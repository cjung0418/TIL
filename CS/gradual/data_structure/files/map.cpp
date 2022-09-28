#include <bits/stdc++.h>
using namespace std;
int main() {
	map<string, int> _map;
	_map["apple"]++;
	_map["apple"]++;
	for (auto c : _map) {
		cout << c.first << " : " << c.second << "\n";
	}
	return 0;
}
