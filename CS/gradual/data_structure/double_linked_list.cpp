#include <bits/stdc++.h>
using namespace std;
int main() {
	list<int> a;
	for (int i = 0; i < 10; i++)a.push_back(i);
	for (int i = 0; i < 10; i++)a.push_front(i);
	auto it = a.begin(); it++;
	a.insert(it, 1000);
	for (auto it : a) cout << it << " ";
	cout << '\n';
	a.pop_front();
	a.pop_back();
	for (auto it : a) cout << it << " ";
	cout << '\n';
	return 0;
}
